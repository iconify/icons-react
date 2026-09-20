import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v538bx.css';
import '../../css/c/cfdtzv.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d--8d_6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGL9Ab9dwT"><path class="v538bx"/><path class="cfdtzv"/></mask></defs><path mask="url(#SVGL9Ab9dwT)" class="botfzx"/>`,
		"fallback": "line-md:youtube-filled",
	});
}

export default Component;
