import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmwis782f.css';
import '../../css/j/j52z7pbtj.css';
import '../../css/c/chhmubb1r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmwis782f"/><path class="j52z7pbtj"/><path class="chhmubb1r"/>`,
		"fallback": "carbon:wind-stream",
	});
}

export default Component;
