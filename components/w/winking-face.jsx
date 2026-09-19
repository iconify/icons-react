import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhzkfkbjg.css';
import '../../css/b/b0u2a7nui.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhzkfkbjg"/><path clip-rule="evenodd" class="b0u2a7nui"/>`,
		"fallback": "fluent-emoji-high-contrast:winking-face",
	});
}

export default Component;
