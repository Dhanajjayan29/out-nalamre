import os
import re
from pathlib import Path

def remove_css_js_format_lists(html_content):
    # Remove CSS: External CSS links and <style> tags
    html_content = re.sub(r'<link[^>]*stylesheet[^>]*>', '', html_content, flags=re.IGNORECASE)
    html_content = re.sub(r'<style[^>]*>.*?</style>', '', html_content, flags=re.DOTALL | re.IGNORECASE)
    
    # Remove JavaScript: Inline <script> tags and their content
    html_content = re.sub(r'<script[^>]*>.*?</script>', '', html_content, flags=re.DOTALL | re.IGNORECASE)
    
    # Format list items (<li>) to remove complex inline styling and match your example
    html_content = re.sub(
        r'<li[^>]*>(.*?)</li>',
        r'<li>\1</li>',
        html_content,
        flags=re.DOTALL | re.IGNORECASE
    )
    
    # Remove any remaining empty style attributes
    html_content = re.sub(r'\s*style="[^"]*"', '', html_content)
    
    return html_content

def process_html_files(input_dir, output_dir):
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Traverse files in input directory
    for root, _, files in os.walk(input_dir):
        for file in files:
            if file.endswith(".html"):
                # Read HTML content
                input_file_path = os.path.join(root, file)
                with open(input_file_path, 'r', encoding='utf-8') as f:
                    html_content = f.read()
                
                # Clean up CSS, JS, and format lists
                cleaned_content = remove_css_js_format_lists(html_content)
                
                # Define new file path with "_new" suffix
                relative_path = os.path.relpath(root, input_dir)
                new_folder = os.path.join(output_dir, relative_path)
                os.makedirs(new_folder, exist_ok=True)
                output_file_path = os.path.join(new_folder, f"{Path(file).stem}_new.html")
                
                # Save cleaned HTML content
                with open(output_file_path, 'w', encoding='utf-8') as f:
                    f.write(cleaned_content)
                print(f"Processed and saved: {output_file_path}")

# Specify your paths
input_directory = r"D:\seperate files\new-web\out-nalamre\usefull-info"
output_directory = r"D:\seperate files\new-web\out-nalamre\usefull-info1"

# Run the process
process_html_files(input_directory, output_directory)
