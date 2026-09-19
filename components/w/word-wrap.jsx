import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5fzrzpqs.css';
import '../../css/z/z40nj6nmk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b5fzrzpqs"/><path class="z40nj6nmk"/></g>`,
		"fallback": "codicon:word-wrap",
	});
}

export default Component;
