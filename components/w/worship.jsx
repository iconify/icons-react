import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnjnaso6q.css';
import '../../css/a/a-sn7bb5a.css';
import '../../css/f/f0cwefboj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnjnaso6q"/><path class="a-sn7bb5a"/><path class="f0cwefboj"/>`,
		"fallback": "carbon:worship",
	});
}

export default Component;
