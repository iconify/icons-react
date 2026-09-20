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
		"content": `<style>.f-hlyeson {
  fill: currentColor;
  d: path("M5.75 2a.75.75 0 0 0-.75.75v18.5c0 .414.336.75.75.75H8V11.75a.75.75 0 0 1 1.5 0V22h8.75a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75zM9.5 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}
</style><path class="f-hlyeson"/>`,
		"fallback": "fluent:xbox-console-24-filled",
	});
}

export default Component;
