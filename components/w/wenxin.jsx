import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzwtx_bod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzwtx_bod"/>`,
		"fallback": "thesvg-color:wenxin",
	});
}

export default Component;
