import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d87tf4g5x.css';
import '../../css/b/btx7j3qro.css';
import '../../css/v/vpayovg2b.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d87tf4g5x"/><path class="btx7j3qro"/><path class="vpayovg2b"/>`,
		"fallback": "formkit:zip",
	});
}

export default Component;
