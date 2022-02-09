const Cache = require('@11ty/eleventy-cache-assets')

/**
 * Grabs the remote data for studio images and returns back
 * an array of objects
 *
 * @returns {Array} Empty or array of objects
 */
module.exports = async() => {
	try {
		// grabs either the fresh remote data or cached data (will always be fresh live)
		const { items } = await Cache(
			'https://11ty-from-scratch-content-feeds.piccalil.li/media.json',
			{
				duration: '1d', //1 day
				type: 'json'
			}
		)
		return items	
	} catch(e) {
		console.error(e)
		return []
	}
}
