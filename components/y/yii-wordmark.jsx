import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjq8arykb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjq8arykb"/>`,
		"fallback": "devicon-plain:yii-wordmark",
	});
}

export default Component;
