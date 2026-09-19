import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nuhxyubyj.css';
import '../../css/c/cbm0f5bmh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nuhxyubyj"/><path class="cbm0f5bmh"/></g>`,
		"fallback": "fluent-emoji-flat:white-square-button",
	});
}

export default Component;
