import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfcbzqdzf.css';
import '../../css/l/lqc9yhstq.css';
import '../../css/b/b8lwe5bdr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cfcbzqdzf"/><path clip-rule="evenodd" class="lqc9yhstq"/><path class="b8lwe5bdr"/>`,
		"fallback": "ion:wifi",
	});
}

export default Component;
