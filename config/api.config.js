module.exports = {
  // Rclone's public clientId (for OneDrive Personal use)
  clientId: '07b3fdbe-7bb0-41ae-9b30-9b2c2330631f',
  obfuscatedClientSecret: '', // rclone uses public client, so no secret needed

  redirectUri: 'http://localhost', // not used since you're bypassing OAuth redirect

  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  scope: 'user.read files.read offline_access',

  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
