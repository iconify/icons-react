import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqay7ob1p.css';
import '../../css/r/rs_g1igkr.css';
import '../../css/h/hkaof2wbu.css';
import '../../css/b/b457pmy8i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqay7ob1p"/><path class="rs_g1igkr"/><path class="hkaof2wbu"/><path class="b457pmy8i"/>`,
		"fallback": "streamline-emojis:wrench",
	});
}

export default Component;
