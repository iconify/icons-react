import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukjsobcvo.css';
import '../../css/v/vss9bg_wd.css';
import '../../css/c/cndhhqb2a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukjsobcvo"/><path class="vss9bg_wd"/><path class="cndhhqb2a"/>`,
		"fallback": "energy-icons:windmill-20",
	});
}

export default Component;
