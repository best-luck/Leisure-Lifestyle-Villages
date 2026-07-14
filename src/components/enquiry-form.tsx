import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  interest: z.string().max(60).optional(),
  message: z.string().trim().min(1, "Please add a short message").max(1000),
});

export function EnquiryForm({ interestOptions }: { interestOptions?: string[] }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your details");
      setStatus("error");
      return;
    }
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" required />
        <Field name="email" label="Email address" type="email" required />
        <Field name="phone" label="Phone (optional)" />
        {interestOptions && interestOptions.length > 0 ? (
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-widest text-earth-900/70">
              I'm interested in
            </label>
            <select
              name="interest"
              className="h-11 w-full rounded-full border border-earth-900/10 bg-sand-50 px-4 text-sm text-earth-900 focus:border-clay-600 focus:outline-none"
            >
              {interestOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
        ) : (
          <Field name="interest" label="Enquiry type (optional)" />
        )}
      </div>
      <div className="space-y-2">
        <label className="block text-xs font-medium uppercase tracking-widest text-earth-900/70">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          maxLength={1000}
          className="w-full rounded-2xl border border-earth-900/10 bg-sand-50 px-4 py-3 text-sm text-earth-900 focus:border-clay-600 focus:outline-none"
        />
      </div>

      {status === "success" && (
        <p className="rounded-full bg-earth-900/5 px-5 py-3 text-sm text-earth-900">
          Thank you — one of our team will be in touch shortly.
        </p>
      )}
      {status === "error" && error && (
        <p className="rounded-full bg-destructive/10 px-5 py-3 text-sm text-destructive">{error}</p>
      )}

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-earth-900 py-3 pl-6 pr-7 text-sm font-medium text-sand-50 transition-colors hover:bg-clay-700"
      >
        Send enquiry
      </button>
    </form>
  );
}

function Field({
  name, label, type = "text", required,
}: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-medium uppercase tracking-widest text-earth-900/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="h-11 w-full rounded-full border border-earth-900/10 bg-sand-50 px-4 text-sm text-earth-900 focus:border-clay-600 focus:outline-none"
      />
    </div>
  );
}
