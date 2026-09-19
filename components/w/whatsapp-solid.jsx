import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/s/s1brhjmbn.css';
import '../../css/j/j66rvjbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGlgxcXbAS" class="n1mjunbsu"><path clip-rule="evenodd" class="s1brhjmbn"/></mask><path clip-rule="evenodd" mask="url(#SVGlgxcXbAS)" class="j66rvjbbo"/>`,
		"fallback": "basil:whatsapp-solid",
	});
}

export default Component;
