import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btf2_ybvf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="btf2_ybvf"/>`,
		"fallback": "streamline:zodiac-7-solid",
	});
}

export default Component;
