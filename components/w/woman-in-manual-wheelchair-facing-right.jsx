import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_v1zhbtb.css';
import '../../css/d/d5acjcb7w.css';
import '../../css/u/u2kjx6byn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_v1zhbtb"/><path class="d5acjcb7w"/><path class="u2kjx6byn"/>`,
		"fallback": "fluent-emoji-high-contrast:woman-in-manual-wheelchair-facing-right",
	});
}

export default Component;
