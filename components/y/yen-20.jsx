import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u9k00b_1r.css';
import '../../css/w/wr4tv666r.css';
import '../../css/f/faz73x6ks.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u9k00b_1r"/><path class="wr4tv666r"/><path class="faz73x6ks"/>`,
		"fallback": "energy-icons:yen-20",
	});
}

export default Component;
