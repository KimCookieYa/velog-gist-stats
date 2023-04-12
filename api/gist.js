import { Octokit } from '@octokit/rest.js';

const createGist = async (lines) => {
    const octokit = new Octokit({ auth: `token ${process.env.GH_TOKEN}` });
    const gist = await octokit.gists.get({
        gist_id: process.env.GIST_ID
    }).catch(error => console.error(`Unable to update gist\n${error}`));
    if (!gist) return;

    const filename = Object.keys(gist.data.files)[0];
    await octokit.gists.update({
        gist_id: process.env.GIST_ID,
        files: {
        [filename]: {
            // eslint-disable-next-line quotes
            filename: "My Velog",
            content: lines,
        },
        },
    });
}

module.exports = createGist;