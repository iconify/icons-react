import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ar69pc4bh {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h1.423V6H4zm2.423 0h11.154V6H6.423zm12.154 0H20V6h-1.423zM6.423 6v12z");
}
</style><path class="ar69pc4bh"/>`,
		"fallback": "material-symbols-light:width-full-outline-sharp",
	});
}

export default Component;
