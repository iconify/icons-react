import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dgv8ukfwq {
  fill: currentColor;
  d: path("M13.5 2C19.851 2 25 7.149 25 13.5c0 2.828-1.021 5.418-2.715 7.42l.024-.026l6.398 6.399a1 1 0 1 1-1.414 1.414l-6.398-6.398c-2 1.68-4.58 2.691-7.395 2.691C7.149 25 2 19.851 2 13.5S7.149 2 13.5 2M8 12.5a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2z");
}
</style><path class="dgv8ukfwq"/>`,
		"fallback": "fluent:zoom-out-32-filled",
	});
}

export default Component;
