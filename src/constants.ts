interface sectionInterface {
	title: string,
	text: string
	asset: string
}

const sections: sectionInterface[] = [
  {
    title: 'Lorem ipsum',
    text: 'Velit mollit aliqua ullamco dolor dolore aliqua sit ea adipisicing magna fugiat officia Velit mollit aliqua ullamco dolor dolore aliqua sit ea adipisicing magna fugiat officia.',
    asset: 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step1-2D_aeea862f0b.svg',
  },
  {
    title: 'Lorem ipsum',
    text: 'Consequat duis consequat ex nisi ea ullamco irure deserunt enim. Consequat duis consequat ex nisi ea ullamco irure deserunt enim.',
    asset: 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step2-2D_6729998af1.svg',
  },
  {
    title: 'Lorem ipsum',
    text: 'Est duis Lorem sunt aliqua laborum proident magna. Est duis Lorem sunt aliqua laborum proident magna',
    asset: 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step3-2D_7bc731eae8.svg',
  },
  {
    title: 'Lorem ipsum',
    text: 'Cupidatat officia do sunt amet elit velit enim commodo officia ut sunt occaecat laborum. Cupidatat officia do sunt amet elit velit enim commodo officia ut sunt occaecat laborum',
    asset: 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-step4-2D_9ab379c7f5.svg',
  },

];

const galeryBackground = 'https://d2zv2ciw0ln4h1.cloudfront.net/uploads/hp-primary-desktop_e0dab1f509.svg';

export { sections, galeryBackground };
