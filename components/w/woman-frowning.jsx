import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz4nh0bqh.css';
import '../../css/l/ll2dvhb-d.css';
import '../../css/n/n8o1_4bxc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz4nh0bqh"/><path class="ll2dvhb-d"/><path class="n8o1_4bxc"/>`,
		"fallback": "fluent-emoji-high-contrast:woman-frowning",
	});
}

export default Component;
