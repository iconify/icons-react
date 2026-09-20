import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmc7_aczv.css';
import '../../css/d/d30tv5bpb.css';
import '../../css/s/ssc_8on_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmc7_aczv"/><path clip-rule="evenodd" class="d30tv5bpb"/><path class="ssc_8on_a"/>`,
		"fallback": "mingcute:weightlifting-fill",
	});
}

export default Component;
