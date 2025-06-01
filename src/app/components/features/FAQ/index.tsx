import Heading from "@components/ui/Heading";
import Collapse from "@components/common/Collapse";
import Paragraph from "@components/ui/Paragraph";
import { EXTERNAL_LINKS } from "@/config/constants";

const faqCategories = [
  {
    title: "General",
    items: [
      {
        question: "What is Chapagram?",
        answer:
          "Chapagram is a Telegram bot that enables users to send and receive money directly within Telegram. It also offers features like money requests and automatic bank transfers through a virtual account system called Zeday.",
      },
      {
        question: "Is Chapagram secure?",
        answer:
          "Yes. Chapagram uses secure protocols to protect your transactions. For enhanced account safety, we recommend enabling two-factor authentication on your Telegram account.",
      },
    ],
  },
  {
    title: "Sending Money",
    items: [
      {
        question: "How do I send money using Chapagram?",
        answer:
          "Use the 'Send Money' option in the bot to transfer funds directly to another Telegram user. The recipient will be notified and can withdraw the funds to their preferred bank account.",
      },
      {
        question: "What happens if the recipient doesn't withdraw the money?",
        answer:
          "The money will remain in their Zeday account until they choose to withdraw it or have an auto-settle account configured.",
      },
    ],
  },
  {
    title: "Requesting Money",
    items: [
      {
        question: "How do I request money from someone on Telegram?",
        answer:
          "Choose the 'Request Money' option to generate a request, which you can share with your Telegram contacts. Once they accept and send the money, the amount will be credited to your Zeday account.",
      },
      {
        question: "Where does the money go when I receive it?",
        answer:
          "Funds will be held in your Zeday account. You can either withdraw them manually or set up an auto-settle account for automatic transfers to your bank.",
      },
    ],
  },
  {
    title: "Auto-Settle Account",
    items: [
      {
        question: "What is an auto-settle account?",
        answer:
          "An auto-settle account is a bank account you connect to your Zeday account. When activated, all incoming funds are automatically transferred to this bank account without manual action.",
      },
      {
        question: "Can I change my auto-settle account?",
        answer:
          "Yes. You can update your auto-settle bank account at any time through the settings in the bot.",
      },
    ],
  },
  {
    title: "Withdrawals",
    items: [
      {
        question: "How can I withdraw money using Chapagram?",
        answer: (
          <>
            <span className="mb-2 block">
              There are two ways to withdraw money
            </span>
            <span className="block">From a received money message:</span>
            When someone sends you money, you&apos;ll see a &apos;Withdraw&apos;
            button next to the message. Click it to start the withdrawal process
            for that specific amount.
            <span className="mt-2 block">From your Zeday account balance:</span>
            Open the keyboard menu in your Telegram chat with Chapagram. If you
            don’t see the keyboard, tap the four-rectangle icon (a square grid)
            on the right side of your Telegram message input field. A list of
            buttons will appear. Look for the one labeled &apos;Zeday&apos;. If
            it&apos;s not on the first screen, use the Next or Previous button
            to navigate. After selecting &apos;Zeday&apos;, tap the
            &apos;Withdraw&apos; button. Chapagram will prompt you to choose
            from which account you&apos;d like to withdraw the money. Follow the
            steps that follow to complete your withdrawal.
          </>
        ),
      },
    ],
  },
  {
    title: "Troubleshooting and Support",
    items: [
      {
        question: "I sent money to the wrong user. Can I cancel or reverse it?",
        answer:
          "Completed transactions cannot be reversed. Please double-check recipient details before sending funds.",
      },
      {
        question:
          "My withdrawal has not arrived in my bank account. What should I do?",
        answer: (
          <>
            Bank processing times can vary. If the issue persists, please
            contact our support team through
            <a
              href={EXTERNAL_LINKS.TELEGRAM_BOT}
              className="ml-1 text-blue-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              @ChapagramSupport
            </a>
            .
          </>
        ),
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="mx-auto flex flex-col gap-5">
      <Heading className="text-center">
        Frequently Asked <br /> Questions
      </Heading>
      <Paragraph className="my-6 text-center">
        List of frequently asked questions to provide you with quick and
        comprehensive answers.
      </Paragraph>
      {faqCategories.map((category) => (
        <div key={category.title} className="mb-6">
          <Paragraph className="mb-2 font-medium xl:text-lg">
            {category.title}
          </Paragraph>
          <Collapse items={category.items} />
        </div>
      ))}
      <Paragraph className="text-center">
        More questions?{" "}
        <a
          href={`tel:${EXTERNAL_LINKS.CUSTOMER_SUPPORT_NUMBER}`}
          className="bg-transparent text-blue-6"
        >
          Contact us
        </a>
      </Paragraph>
    </div>
  );
};

export default FAQ;
