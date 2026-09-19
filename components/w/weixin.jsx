import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw5pvbc7n.css';

const viewBox = {"width":2048,"height":1728};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw5pvbc7n"/>`,
		"fallback": "fa:weixin",
	});
}

export default Component;
