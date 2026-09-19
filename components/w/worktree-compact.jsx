import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7kzhix4g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7kzhix4g"/>`,
		"fallback": "codicon:worktree-compact",
	});
}

export default Component;
