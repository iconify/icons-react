import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt3-jpbqk.css';

const viewBox = {"width":312,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt3-jpbqk"/>`,
		"fallback": "ps:zootool",
	});
}

export default Component;
