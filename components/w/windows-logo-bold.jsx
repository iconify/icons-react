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
		"content": `<style>.u9tbm3byp {
  fill: currentColor;
  d: path("M99.69 51.88a12 12 0 0 0-9.84-2.6l-60 10.91A12 12 0 0 0 20 72v36a12 12 0 0 0 12 12h60a12 12 0 0 0 12-12V61.09a12 12 0 0 0-4.31-9.21M80 96H44V82l36-6.54Zm135.69-65.21a12 12 0 0 0-9.84-2.6l-76 13.81A12 12 0 0 0 120 53.82V108a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12V40a12 12 0 0 0-4.31-9.21M196 96h-52V63.83l52-9.45ZM92 136H32a12 12 0 0 0-12 12v36a12 12 0 0 0 9.85 11.81l60 10.91A12 12 0 0 0 104 194.91V148a12 12 0 0 0-12-12m-12 44.53L44 174v-14h36ZM208 136h-76a12 12 0 0 0-12 12v54.18a12 12 0 0 0 9.85 11.82l76 13.82A12 12 0 0 0 220 216v-68a12 12 0 0 0-12-12m-12 65.62l-52-9.45V160h52Z");
}
</style><path class="u9tbm3byp"/>`,
		"fallback": "ph:windows-logo-bold",
	});
}

export default Component;
