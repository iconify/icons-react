import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2d_nybeh.css';
import '../../css/t/taasc_mln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2d_nybeh"/><path class="taasc_mln"/>`,
		"fallback": "carbon:zoom-out",
	});
}

export default Component;
