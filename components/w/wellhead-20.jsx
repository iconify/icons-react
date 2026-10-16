import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zclmw7bqj.css';
import '../../css/w/wyksrhbhl.css';
import '../../css/q/qiqucbbuq.css';
import '../../css/y/y6jqneb4d.css';
import '../../css/u/uxixycbrw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zclmw7bqj"/><path class="wyksrhbhl"/><path class="qiqucbbuq"/><path class="y6jqneb4d"/><path class="uxixycbrw"/>`,
		"fallback": "energy-icons:wellhead-20",
	});
}

export default Component;
