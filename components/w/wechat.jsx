import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clr0thirl.css';
import '../../css/c/ci_39onbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr0thirl"/><path class="ci_39onbj"/>`,
		"fallback": "lineicons:wechat",
	});
}

export default Component;
