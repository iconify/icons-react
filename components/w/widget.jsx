import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/gufd03s5p.css';
import '../../css/v/velahuttd.css';
import '../../css/y/y2ls4efbx.css';
import '../../css/t/td4pmbm2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><rect class="gufd03s5p"/><rect class="velahuttd"/><rect class="y2ls4efbx"/><rect class="td4pmbm2c"/></g>`,
		"fallback": "lets-icons:widget",
	});
}

export default Component;
