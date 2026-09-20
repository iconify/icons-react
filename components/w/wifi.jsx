import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye4bivxcv.css';
import '../../css/u/uq7ud8o0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye4bivxcv"/><path class="uq7ud8o0q"/>`,
		"fallback": "prime:wifi",
	});
}

export default Component;
