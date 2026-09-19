import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peommn6jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peommn6jl"/>`,
		"fallback": "boxicons:wine",
	});
}

export default Component;
