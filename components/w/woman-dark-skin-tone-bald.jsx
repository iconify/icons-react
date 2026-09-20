import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbv1vxbpb.css';
import '../../css/a/amn_b-_3e.css';
import '../../css/l/l4css97ah.css';
import '../../css/x/xmpcpabmy.css';
import '../../css/h/hehegibhq.css';
import '../../css/q/qrwhk6b5f.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="vbv1vxbpb"/><path class="amn_b-_3e"/><path class="l4css97ah"/><path class="xmpcpabmy"/><path class="hehegibhq"/><path class="qrwhk6b5f"/>`,
		"fallback": "openmoji:woman-dark-skin-tone-bald",
	});
}

export default Component;
