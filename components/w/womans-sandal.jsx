import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4cb4e95g.css';
import '../../css/n/n_u6f3b6p.css';
import '../../css/o/opz3x_x8z.css';
import '../../css/c/c_n2ig04y.css';
import '../../css/x/xtxig0bhl.css';
import '../../css/x/xy1lybc_a.css';
import '../../css/m/myphakbep.css';
import '../../css/o/oon27-ytb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4cb4e95g"/><path class="n_u6f3b6p"/><path class="opz3x_x8z"/><path class="c_n2ig04y"/><path class="xtxig0bhl"/><path class="xy1lybc_a"/><path class="myphakbep"/><path class="oon27-ytb"/>`,
		"fallback": "streamline-emojis:womans-sandal",
	});
}

export default Component;
