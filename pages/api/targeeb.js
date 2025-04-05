// Example code to fetch audio files from Google Drive using the Google Drive API client library for Node.js
// This code assumes you've already set up authentication and obtained necessary credentials

import { google } from "googleapis";

async function handler(req, res) {
    if (req.method === 'GET') {

        // Set up authentication
        const folderId = '1gICtNn6m6GOlVzJZJlwglA6pex2reCFW';

        // Create a drive instance
        const drive = google.drive({ version: 'v3', auth: process.env.AUDIO_API_KEY });
        try {
            const folderResponse = await drive.files.get({
                fileId: folderId,
                fields: 'name',
            });

            const folderName = folderResponse.data.name;

            const response = await drive.files.list({
                q: `'${folderId}' in parents and mimeType='audio/mpeg'`, // Filter by MIME type to get only audio files
                fields: 'files(id, name, webViewLink)', // Specify fields to retrieve
            });

            const audioFiles = response.data.files;

            // Send the fetched audio files as response
            res.status(200).json({ folderName, audioFiles });
        } catch (error) {
            console.error('Error fetching audio files:', error);
            // Send error response
            res.status(500).json({ error: 'Error fetching audio files' });
        }
    } else {
        // Handle other HTTP methods
        res.status(405).end(); // Method Not Allowed
    }
}

export default handler;
