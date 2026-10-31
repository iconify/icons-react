import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f92mcl_nx.css';
import '../../css/e/erndkffxn.css';
import '../../css/n/nudl7banp.css';
import '../../css/z/z01m0kbdk.css';
import '../../css/u/uftd87b3n.css';
import '../../css/s/s-uavwb1y.css';
import '../../css/t/t92dp4tya.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f92mcl_nx"/><path class="erndkffxn"/><path class="nudl7banp"/><path class="z01m0kbdk"/><path class="uftd87b3n"/><path class="s-uavwb1y"/><path class="t92dp4tya"/>`,
		"fallback": "tabler-flags:zimbabwe",
	});
}

export default Component;
