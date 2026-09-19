import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amy0yq-al.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amy0yq-al"/>`,
		"fallback": "dinkie-icons:wechat-small",
	});
}

export default Component;
