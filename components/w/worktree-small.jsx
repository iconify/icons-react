import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_h7uab0f.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_h7uab0f"/>`,
		"fallback": "codicon:worktree-small",
	});
}

export default Component;
