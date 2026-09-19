import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh36b_exl.css';
import '../../css/t/t2wztiban.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh36b_exl"/><path class="t2wztiban"/>`,
		"fallback": "carbon:worship-muslim",
	});
}

export default Component;
