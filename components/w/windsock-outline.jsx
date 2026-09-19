import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6k8eclde.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r6k8eclde"/>`,
		"fallback": "glyphs:windsock-outline",
	});
}

export default Component;
