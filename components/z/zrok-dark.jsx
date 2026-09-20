import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_kkczf_w.css';
import '../../css/k/kb_awpb0a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_kkczf_w"/><path class="kb_awpb0a"/>`,
		"fallback": "selfhst:zrok-dark",
	});
}

export default Component;
