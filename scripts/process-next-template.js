#!/usr/bin/env node

/**
 * Process Next Email Template - Claude Code Slash Command
 * 
 * This script automates the workflow of:
 * 1. Reading the next combination from the CSV file
 * 2. Removing it from the list
 * 3. Generating an HTML email template
 * 4. Adding it to the premade templates
 * 
 * Usage: node scripts/process-next-template.js [csv-file-path]
 */

const fs = require('fs');
const path = require('path');

const CSV_FILE = process.argv[2] || 'chunks_csv/combinations_001.csv';
const TEMPLATES_FILE = 'src/data/premadeTemplates.ts';

function readCSVLines(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').filter(line => line.trim());
  } catch (error) {
    console.error(`❌ Error reading CSV file: ${error.message}`);
    process.exit(1);
  }
}

function writeCSVLines(filePath, lines) {
  fs.writeFileSync(filePath, lines.join('\n'));
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

function getNextCombination(csvPath) {
  const lines = readCSVLines(csvPath);
  
  if (lines.length <= 1) {
    console.log('✅ No more combinations to process!');
    return null;
  }

  // Get the first data line (skip header)
  const nextLine = lines[1];
  const [templateType, businessType] = parseCSVLine(nextLine).map(s => s.replace(/"/g, '').trim());
  
  // Remove the processed line
  const remainingLines = [lines[0], ...lines.slice(2)];
  writeCSVLines(csvPath, remainingLines);
  
  console.log(`🎯 Processing: "${templateType}" for "${businessType}"`);
  console.log(`📊 Remaining: ${remainingLines.length - 1} combinations`);
  
  return { templateType, businessType };
}

function generateTemplateHTML(templateType, businessType) {
  // This would typically call an AI service to generate the template
  // For now, we'll create a placeholder that can be filled in
  const templateName = `${templateType} — ${businessType}`;
  
  const html = `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>${templateName}</title>
  <style>
    @media (max-width: 600px) {
      .container { padding: 0 16px !important; }
      .card { border-radius: 12px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc;">
    <tr>
      <td></td>
      <td class="container" style="display:block;max-width:600px;margin:32px auto;padding:0 20px;">
        <div style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);border:1px solid #e5e7eb;">
          
          <!-- Header -->
          <div style="background:linear-gradient(135deg, #4f46e5, #7c3aed);padding:32px 28px;color:#ffffff;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);padding:6px 12px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:16px;">
              ${businessType.toUpperCase()}
            </div>
            <h1 style="margin:0 0 12px;font-size:26px;line-height:1.3;font-weight:700;">
              {{HEADLINE}}
            </h1>
            <p style="margin:0;font-size:16px;opacity:0.9;line-height:1.5;">
              {{SUBHEADLINE}}
            </p>
          </div>

          <!-- Content -->
          <div style="padding:32px 28px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;">
            <h2 style="margin:0 0 16px;font-size:18px;color:#1f2937;">Hi {{FIRST_NAME}},</h2>
            
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#4b5563;">
              {{OPENING_PARAGRAPH}}
            </p>

            <!-- Value Proposition -->
            <div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:20px;margin:24px 0;">
              <h3 style="margin:0 0 12px;font-size:16px;color:#1f2937;font-weight:600;">{{VALUE_PROP_TITLE}}</h3>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#6b7280;">
                {{VALUE_PROP_DESCRIPTION}}
              </p>
            </div>

            <p style="margin:0 0 28px;font-size:15px;line-height:1.6;color:#4b5563;">
              {{CLOSING_PARAGRAPH}}
            </p>

            <!-- CTA -->
            <div style="text-align:center;">
              <a href="{{CTA_LINK}}" style="display:inline-block;background:#4f46e5;color:#ffffff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 28px;border-radius:8px;box-shadow:0 4px 14px 0 rgba(79, 70, 229, 0.39);">
                {{CTA_TEXT}}
              </a>
            </div>

            <p style="margin:24px 0 0;font-size:13px;line-height:1.5;color:#9ca3af;text-align:center;">
              {{FOLLOWUP_TEXT}}
            </p>
          </div>

          <!-- Footer -->
          <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 28px;color:#6b7280;">
            <p style="margin:0 0 4px;font-size:14px;">Best regards,</p>
            <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#1f2937;">{{YOUR_NAME}}</p>
            <p style="margin:0;font-size:13px;">{{YOUR_TITLE}} | {{COMPANY}}</p>
          </div>

        </div>
      </td>
      <td></td>
    </tr>
  </table>
</body>
</html>`;

  return { templateName, html };
}

function addToTemplatesFile(templateName, html, category) {
  const templatesPath = TEMPLATES_FILE;
  let content = fs.readFileSync(templatesPath, 'utf8');
  
  // Generate function name
  const functionName = templateName
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^./, str => str.toLowerCase());
  
  // Add the new template to the array (after the opening bracket)
  const insertAfter = 'export const premadeTemplates: Array<{ title: string; category: string; html: string }> = [';
  const newEntry = `  {
    title: "${templateName}",
    category: "${category}",
    html: ${functionName}(),
  },`;
  
  const insertIndex = content.indexOf(insertAfter) + insertAfter.length;
  content = content.slice(0, insertIndex) + '\n' + newEntry + content.slice(insertIndex);
  
  // Add the function at the end (before the closing bracket/brace)
  const functionCode = `
function ${functionName}() {
  return \`${html.replace(/`/g, '\\`')}\`;
}
`;
  
  // Insert before the last closing brace
  const lastBraceIndex = content.lastIndexOf('}');
  content = content.slice(0, lastBraceIndex) + functionCode + content.slice(lastBraceIndex);
  
  fs.writeFileSync(templatesPath, content);
  console.log(`📝 Added template function: ${functionName}()`);
}

function categorizeTemplate(templateType) {
  const type = templateType.toLowerCase();
  if (type.includes('cold outreach') || type.includes('outreach')) return 'Outreach';
  if (type.includes('proposal') || type.includes('sales')) return 'Sales';
  if (type.includes('invoice') || type.includes('billing')) return 'Billing';
  if (type.includes('follow') || type.includes('update')) return 'Follow-up';
  if (type.includes('onboard')) return 'Onboarding';
  if (type.includes('marketing') || type.includes('newsletter')) return 'Marketing';
  return 'General';
}

function main() {
  console.log('🚀 Processing next email template combination...\n');
  
  const csvPath = path.resolve(CSV_FILE);
  
  if (!fs.existsSync(csvPath)) {
    console.error(`❌ CSV file not found: ${csvPath}`);
    process.exit(1);
  }
  
  const combination = getNextCombination(csvPath);
  
  if (!combination) {
    return;
  }
  
  const { templateType, businessType } = combination;
  const { templateName, html } = generateTemplateHTML(templateType, businessType);
  const category = categorizeTemplate(templateType);
  
  try {
    addToTemplatesFile(templateName, html, category);
    console.log(`✅ Successfully added: "${templateName}"`);
    console.log(`📁 Category: ${category}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Review the generated template in src/data/premadeTemplates.ts');
    console.log('   2. Customize the placeholder content as needed');
    console.log('   3. Run `npm run dev` and test the template');
    console.log('   4. Run this command again to process the next combination');
  } catch (error) {
    console.error(`❌ Error adding template: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { getNextCombination, generateTemplateHTML, addToTemplatesFile };