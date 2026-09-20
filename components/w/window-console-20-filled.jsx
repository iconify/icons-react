import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xhr61kbve {
  fill: currentColor;
  d: path("M5.646 9.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L7.293 11.5L5.646 9.854a.5.5 0 0 1 0-.708M14.5 13h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1M2.996 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5V6H17v1h-.003v7.5a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5zm1 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7z");
}
</style><path class="xhr61kbve"/>`,
		"fallback": "fluent:window-console-20-filled",
	});
}

export default Component;
