import chalk from 'chalk';
    const indent = (text) => text.split('\n').map(it => `    ${it}`).join('\n');
            return `${chalk.yellow(format_oid(oid, options))} ${title_line()}`;
            s += chalk.yellow(`commit ${format_oid(oid, options)}\n`);
            s += indent(title_line());
            s += chalk.yellow(`commit ${format_oid(oid, options)}\n`);
            s += indent(commit.message);
            s += chalk.yellow(`commit ${format_oid(oid, options)}\n`);
            s += indent(commit.message);
            s += chalk.yellow(`commit ${format_oid(oid, options)}\n`);
            s += indent(commit.message);
            s += chalk.yellow(`commit ${oid}\n`);
            s += indent(commit.message);
    s += chalk.yellow(`tree ${oid}\n`);
    s += chalk.yellow(`tag ${tag.tag}\n`);
export const process_diff_formatting_options = (options, { show_patch_by_default = true } = {}) => {
    result.display_diff = () => {
        return !result.no_patch && (result.raw || result.numstat || result.summary || result.patch);
    };

    if (show_patch_by_default && !result.raw && !result.numstat && !result.summary && !result.patch)
            s += chalk.bold(`diff --git ${first_line_a_path} ${b_path}\n`);
                s += chalk.bold(`index ${shorten_hash(a.oid)}..${shorten_hash(b.oid)} ${a.mode}\n`);
                    s += chalk.bold(`new file mode ${b.mode}\n`);
                    s += chalk.bold(`old mode ${a.mode}\n`);
                    s += chalk.bold(`new mode ${b.mode}\n`);
                s += chalk.bold(`index ${shorten_hash(a.oid)}..${shorten_hash(b.oid)}\n`);
            s += chalk.bold(`--- ${a_path}\n`);
            s += chalk.bold(`+++ ${b_path}\n`);
                s += chalk.blueBright(`@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@\n`);
                            s += chalk.greenBright(`${line}\n`);
                            s += chalk.redBright(`${line}\n`);