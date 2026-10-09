import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlfvtxb2w.css';
import '../../css/l/lylog5b5f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlfvtxb2w"/><path class="lylog5b5f"/>`,
		"fallback": "energy-icons:wrench-20-bold",
	});
}

export default Component;
