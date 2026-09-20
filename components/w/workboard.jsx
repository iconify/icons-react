import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e8g9brbaq {
  fill: var(--svg-color--fff, #fff);
  d: path("M101.98 110.076V75.414l55.816 18.733zm55.816 54.715L101.98 181.7v-34.878zm36.932-83.095l-92.748-33.03v-16.07h-25.6v190.95h25.6v-14.86l92.748-28.366v-25.6l-68.407-25.6l68.407-21.403z");
}

.i-nu8whrn {
  fill: var(--svg-color--51bbd6, #51bbd6);
  d: path("M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128S57.308 0 128 0s128 57.308 128 128");
}
</style><path class="i-nu8whrn"/><path class="e8g9brbaq"/>`,
		"fallback": "logos:workboard",
	});
}

export default Component;
