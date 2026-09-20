import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe5dr5b9o.css';
import '../../css/h/hsqpd_2br.css';
import '../../css/a/anzwqbcxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe5dr5b9o"/><path class="hsqpd_2br"/><path class="anzwqbcxj"/>`,
		"fallback": "material-icon-theme:webpack",
	});
}

export default Component;
